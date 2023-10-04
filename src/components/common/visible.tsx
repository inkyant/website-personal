
export default function onVisible(elements: (Element | null)[], options: object, callback: (entry: IntersectionObserverEntry) => void) {

    if (!elements) return

    let intersectionCallback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => { callback(entry) });
    }
    let observer = new IntersectionObserver(intersectionCallback, options);
    
    elements.forEach((element) => element && observer.observe(element))

    return () => observer.disconnect()

}