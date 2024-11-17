export type Service = {
    service_name: string
    description: string
    process: string
    active: string
    location: string
    price: string
    expected_duration: string
    part_payment_allowed: string
    category_name: string
    category_description: string
}

export type Category = {
    service_id: number
    service_name: string
    description: string
    active: string
    service_category_description_ENGLISH: string
    service_category_description_FRENCH: string
    service_category_description_PORTUGAL: string
    service_category_description_SPANISH: string
    service_category_name_ENGLISH: string
    service_category_name_FRENCH: string
    service_category_name_PORTUGAL: string
    service_category_name_SPANISH: string
    service_icon: string
}

export type Requests = {
    request_id: number
    choice: string
    preferences: string
    charge: string
    active: string
    host_id: number
    requester_id: number
    created_at: Date
}

export type RequestNotice = {
    request_id: number
    choice: string
    preferences: string
    charge: string
    active: string
    host_id: number
    requester_id: number
    created_at: Date
}

export type RequestResponse = {
    request_response_id: number
    response: string
    accepted: number
    active: string
    created_at: string
    request_id: number
}

export type Customers = {
    user_id: number
    username: string
    nationality: string
    email: string
    dob: string
    date_joined: string
    customer_number: string
    first_name: string
    last_name: string
    ID_number: number
    address: string
    gender: string
    location: string
    profession: string
    is_host: number
    is_active: number
    is_verified: number
    created_at: Date
}

export type Customer = {
    ID_number: string
    ID_type_id: number
    active: number | undefined
    address: string
    customer_id: number
    customer_number: string
    datePrivacyPolicy: string | undefined
    dateTermsAndConditions: string | undefined
    dateJoined: string
    delivery_location: string | undefined
    dob: string | undefined
    created_at: string
    email: string
    first_name: string
    gender: string
    id: number
    id_image: string | undefined
    is_active: number | undefined
    is_host: number | undefined
    is_staff: number | undefined
    is_superuser: number | undefined
    is_verified: number | undefined
    language_id: number | undefined
    last_login: string | undefined
    last_name: string | undefined
    location: string | undefined
    mobile_number: string | undefined 
    nationality: string | undefined
    other_names: string | undefined
    picture: string | undefined | null
    password_status: number | undefined
    profession: string | undefined
    username: string | undefined
    updated_at: string | undefined
}
