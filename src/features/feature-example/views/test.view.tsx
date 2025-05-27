import { Button } from "../components";

const TestView = (): React.JSX.Element => {
    return (
        <section className="animate-fadeIn">
            <p className="text-black">Template react with:</p>
            <ul className="text-black my-10">
                <li>Tailwind v3</li>
                <li>react router dom v7</li>
                <li>Tanstack query</li>
                <li>Axios</li>
                <li>Zustand</li>
                <li>Zod</li>
                <li>Jest</li>
            </ul>
            <Button />
        </section>
    )
}

export { TestView };