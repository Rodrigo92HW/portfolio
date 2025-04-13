function ProjectText({ element }) {
    return (
        <>
            {Array.from(element).map(x => (
                <p className="md:text-x mr-4 ml-4 indent-4 text-justify" key={x}>{x}</p>
            ))}
        </>
    )
}
export default ProjectText