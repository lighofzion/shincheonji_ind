
class Partials {
    constructor() {
        this.cache = new Map();
    }

    // Load partial content from a file
    async load(url) {
        if (this.cache.has(url)) {
            return this.cache.get(url);
        }

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load partial: ${url}`);
            }
            const content = await response.text();
            this.cache.set(url, content);
            return content;
        } catch (error) {
            console.error(`Error loading partial ${url}:`, error);
            return '';
        }
    }

    // Insert partial content into a specified element
    async insert(elementId, partialUrl) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element not found: ${elementId}`);
            return;
        }

        const content = await this.load(partialUrl);
        element.innerHTML = content;

        // Execute any scripts in the partial
        const scripts = element.getElementsByTagName('script');
        Array.from(scripts).forEach(script => {
            const newScript = document.createElement('script');
            Array.from(script.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            newScript.textContent = script.textContent;
            script.parentNode.replaceChild(newScript, script);
        });
    }

    async insertHead(partialUrl) {
        const content = await this.load(partialUrl);
        document.head.insertAdjacentHTML('afterbegin', content);
    }

    // Clear the cache
    clearCache() {
        this.cache.clear();
    }
}

// Initialize and export
const partials = new Partials();
export default partials;