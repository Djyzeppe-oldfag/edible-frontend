export interface ApiResponse<T> {
    success: boolean,
    data: T
};

//boxes
export interface BoxMI {
    description: string
    image: string,
    _id: string
};

export interface BoxesState {
    isLoading: boolean,
    data: BoxMI[]
};

//box
export interface BoxFI {
    description: string,
    images: string[],
    members: [{
        role: string,
        worker: {
            name: string,
            _id: string
        },
        _id: string
    }],
    more: [{
        image: string,
        _id: string
    }],
    title: string,
    _id: string
};

export interface BoxState {
    isLoading: boolean,
    data: BoxFI | null
};

//worker 
export interface Worker {
    boxes: [{
        box: {
            _id: string,
            image: string, 
            description: string
        },
        role: string,
        _id: string
    }],
    description: string
    image: string,
    name: string,
    role: string,
    _id: string
};

export interface WorkerState {
    isLoading: boolean,
    data: Worker | null
};

//categories
export interface Category {
    boxes?: BoxMI[]
    _id: string,
    image: string,
    description: string,
    title: string
};

export interface CategoriesState {
    isLoading: boolean,
    data: Category[]
};

//category
export interface CategoryState {
    isLoading: boolean,
    data: Category | null
};