import recipeManager from "../assets/projects/recipe-manager.png"
import companyWebApplication from "../assets/projects/company-web-application.png"

export interface Project {
    name: string;
    description: string;
    tech: string[];
    highlights: string[];
    github?: string;
    screenshot?: string;
}

export const projects: Project[] = [
    {
        name: "Recipe Manager",
        description: "A full-stack recipe management application that allows " + 
        "users to create, organize, update, and delete recipes. Recipes are " + 
        "categorized by meal type, with ingredients and preparation instructions " +
        "stored and retrieved through a RESTful API.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
        highlights: [
            "REST API development",
            "Database integration",
            "CRUD functionality"
        ],
        github: "https://github.com/MurasakiCho/recipe-manager",
        screenshot: recipeManager
    }
]