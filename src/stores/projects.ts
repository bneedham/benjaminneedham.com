import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Project {
  title: string
  domain: string
  url: string
  image: string
  when: number
  role: string
  description: string
  stack: string
}

export const useProjectsStore = defineStore('projects', () => {

  let projects = ref<Array<Project>>([])
  let isOrderASC = ref<Boolean>(true)

  const getProjects = () => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
        projects.value = data.body
      })
      .then(() => {
        newToOld()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  enum SortByOrder {
    ASC = 1,
    DESC = -1,
  }
  function sortByKey<T = any>(arr: T[],
    key: string,
    order: SortByOrder = SortByOrder.ASC) {
    return [...arr].sort(
      (s1: any, s2: any) => order * String(s1[key]).localeCompare(String(s2[key]))
    );
  }

  function newToOld () {
    projects.value = sortByKey(projects.value, "when", -1)
    isOrderASC.value = true
  }
  function oldToNew () {
    projects.value = sortByKey(projects.value, "when", 1)
    isOrderASC.value = false
  }

  return { projects, getProjects, newToOld, oldToNew, isOrderASC }})

export default useProjectsStore
