function ProjectText({ element }) {
    return (
        <>
            {Array.from(element).map(x => (
                <p className="md:text-xl mr-4 ml-4 indent-8 text-justify" key={x}>{x}</p>
            ))}
        </>
    )
}
export default ProjectText