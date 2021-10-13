import fs from 'fs'
import path from 'path'

const recipeDir = process.cwd().concat("/recipes");

export function getsortedRecipeNames(){

    // Get file names under /posts
    const fileNames = fs.readdirSync(recipeDir)
    const allRecipeData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.json$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            fileContents: JSON.parse(fileContents)
        }
    });

    return allRecipeData.sort()
}

export async function getRecipeData(id) {
    const fullPath = path.join(recipeDir, `${id}.md`)
    const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  
    // Combine the data with the id and contentHtml
    return {
      id,
      fileContents
    }
  }