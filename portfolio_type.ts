interface Product {
	title: string,
	term: string,
	description?: string,
	language: Language[]
}

interface Language {
	name: string,
	framework?: Framework[],
	library?: Library[]
}

interface Framework {
	name: string,
	description: string,
	action: Action[]
}

interface Library {
	name: string,
	action: Action[]
}

interface Action {
	summary: string,
	description: string,
	source: string
}
