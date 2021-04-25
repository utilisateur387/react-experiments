import { useState } from 'react';

const tags = ["ux", "arduino", "development", "design", "figma"];
const projects = [
  {
    title: "Curators",
    tags: ["ux", "development", "figma"]
  },
  {
    title: "Tune It",
    tags: ["design", "figma"]
  }
]

const Filter = () => {
  const [activeTags, setActiveTags] = useState([]);

  const isActive = (tags) => {
    return tags.some(tag => activeTags.includes(tag)) ? 'block' : 'none';
    // return activeTags.includes(tags[0]) ? 'block' : 'none';
  };


  const handleClickTag = ({ target }) => {
    if (activeTags.includes(target.name)) {
      setActiveTags((prev) => {
        return prev.filter(tag => tag !== target.name)
      });
    } else {
      return setActiveTags((prev) => [...prev, target.name]);
    }
  };

  return (
    <>
      <h1>Filter</h1>
      {tags.map(tag => <button name={tag} onClick={handleClickTag}>{tag}</button>)}

      <br/>
      <h5><strong>{activeTags.join(" ")}</strong></h5>
      <ul>
        {projects.map((project, index) => {
        console.log(isActive(project.tags));
          return (
            <li style={{display: isActive(project.tags)}} >
              {project.title}/
              {project.tags}
            </li>)
        })}
      </ul>
    </>

  )
}

export default Filter;
