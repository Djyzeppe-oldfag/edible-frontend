export interface ApiResponse<T> {
    success: boolean,
    data: T
};

//auth
export interface JwtDecode {
    blocked: number
};

export interface AuthFields {
    email: string
    password: string
};

export interface AuthState {
    isAuth: boolean,
    token: string,
    error?: string
};

//boxes
export interface Box {
    case_id: number,
    description: string,
    photo_image: string | null,
    price: number,
    price_without_discount: number | null,
    title: string
};

export interface Group {
    boxes: Box[],
    category_id: number,
    title: string
};

export interface BoxesState {
    isLoading: boolean,
    data: Group[],
    opened_id?: number
};

//box
export interface WObject {
    bit_id: number,
    title: string,
    photo: string | null,
    type: number
};

export interface BoxState {
    isLoading: boolean
    data: WObject[],
};

//profile

export interface HistoryRecord {
    bits_history_id: number,
    date: string,
    license_type: number,
    bit: {
        bit_id: number,
        title: string,
        author_Bitmaker: string | null
    }
};

export interface Person {
    balance: number,
    bits_dropped: number,
    bits_histories: HistoryRecord[] | null,
    blocked: number,
    cases_opened: number,
    email: string,
    name: string,
    photo_image: {
        title: string,
        link: string
    } | null,
    replenishment_histories: null
    user_id: number
    verified: number
};

export interface ProfileState {
    isLoading: boolean,
    data: Person | null
};