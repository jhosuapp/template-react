const TestView = (): React.JSX.Element => {
    return (
        <section className="animate-fadeIn">
            <p className="text-white">Template react with:</p>
            <ul className="text-white my-10">
                <li>Tailwind v3</li>
                <li>react router dom v7</li>
                <li>Tanstack query</li>
                <li>Axios</li>
                <li>Zustand</li>
                <li>Zod</li>
                <li>Jest</li>
            </ul>
            <button className="h-[40px] bg-white px-5 rounded-md border border-white hover:bg-primary hover:text-white transition-all">Couter zustand 1</button>
        </section>
    )
}

export { TestView };