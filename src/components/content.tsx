interface ContentProps {
    title: string;
    content: string;
}
export function Content(props: ContentProps) {
    return (
        <section>
            <div style={{
                border: '1px solid #ccc'
            }}>
                <h3>{props.title}Aula de Front</h3>
                <p>{props.content}aula de revisáo do checkpoitn 4</p>
            </div>
        </section>
    )
}