import { v4 as uuidv4 } from "uuid";
const initialState = {
    listItem: [
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Plain White Shirt ",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1557002666-513ca8eaa3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1613338761484-f982b6362b9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG91dGZpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1536891648359-888e3aa968f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG91dGZpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Plain White Shirt",
            price: "29",
        },
    ],
    topSell: [
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt ",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1524275539700-cf51138f679b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
        {
            id: uuidv4(),
            imageURL:
                "https://images.unsplash.com/photo-1579969406275-0b37fa82deca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name: "Plain White Shirt",
            price: "29",
        },
    ]
}
const RootReducer = (state = initialState, action) => {
    return state;
}
export default RootReducer;