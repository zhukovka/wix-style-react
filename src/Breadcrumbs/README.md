# Breadcrumbs component


## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| items | {id: string, int, value:string, node}[] | - | + | Specifies items for breadcrumbs |
| onClick | (id) => {} | - | - | callback on item click |
| activeId | string, int | - | - | id of current active item |
| size | string ('medium', 'large') | 'medium' | - | size of items |
| theme | string ('onWhiteBackground', 'onGrayBackground', 'onDarkBackground') | 'onGrayBackground' | - | Specifies breadcrubms background and font colors |

