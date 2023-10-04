
export default function onVisible(elements: Element[], options: object, callback: (entry: IntersectionObserverEntry) => void) {

    let intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => { callback(entry) });
    }
    let observer = new IntersectionObserver(intersectionCallback, options);
    
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()

}