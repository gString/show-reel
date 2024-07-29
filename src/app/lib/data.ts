import { projects } from "@/app/lib/projects";

export async function fetchStarMenuData() {
  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return Object.entries(projects).map(
      ([key, {placement, info}]) => ({
        id: key,
        placement,
        title: info.title
      })
    )
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch start menu data.');
  }
}

export async function fetchPlacement() {
  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = Object.entries(projects).reduce(
      (accumulator, [key, {placement}]) => accumulator[key] = placement, {},
    )
    console.log('result',result);
    return Object.entries(projects).reduce(
      (accumulator, [key, {placement}]) => accumulator[key] = placement, {},
    );
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch placement data.');
  }
}

export async function fetchIds() {
  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return Object.keys(projects);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch ids data.');
  }
}

export async function fetchIdAndInfo() {
  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(Object.entries(projects).map(([key, value]) => ({id: key, info: value.info})));

    return Object.entries(projects).map(([key, value]) => ({id: key, info: value.info}));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch ids data.');
  }
}

export async function fetchProjectPlacement(id: string) {
  if (!id) return;

  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return projects[id].placement;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch project placement (id: ${id}.`);
  }
}

export async function fetchProjectTitle(id: string) {
  if (!id) return;

  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return projects[id].info.title;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch project title (id: ${id}.`);
  }
}

export async function fetchProjectLink(id: string) {
  if (!id) return;

  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return projects[id].info.link;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch project link (id: ${id}.`);
  }
}

export async function fetchProjectInfo(key: string) {
  try {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return projects[key].info;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch project info.');
  }
}