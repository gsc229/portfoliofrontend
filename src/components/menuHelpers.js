export const filter = (project_type, active_tech, setActiveType, setFiltered, filtered, projects) => {
    
  const type_key = {
    'a': 'all',
    'f': 'featured',
    't':'Team Project',
    'c':'Course Project',
    'p':'Personal Day Project'
  }
  const type = type_key[project_type]
  
  
  if(type==='all'){      
    filtered = projects
  } else if(type === 'featured'){
    filtered = projects.filter(project=>project.featured)
  } else{
    filtered = projects ? projects.filter(project=>project.project_type===type) : ''
  }

  const filteredByTech = []
  
 if(active_tech){     
  {filtered && filtered.map(item=>{
    if(active_tech === 'React'){
      console.log('filter active_tech: ', active_tech)
      if(item.technologies.indexOf('React with hooks') !== -1 || item.technologies.indexOf('React with classes') !== -1){
        filteredByTech.push(item)
      }
    }

    if(active_tech ==='Django'){
      console.log('filter active_tech: ', active_tech)
      if(item.technologies.indexOf('Django') !== -1){
        filteredByTech.push(item)
      }
    }
  })}

  if(!filteredByTech.length){
    filtered = []
  }
}

  setActiveType(project_type)    
  setFiltered(filteredByTech.length ? filteredByTech : filtered)

}