import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    /*{
        name: "Plans",
        path: '/plans'
    },*/
    {
        name: "Staff",
        path: '/staff'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Experience",
        info: "16 years of experience as a carpentry and furniture manager!",
        path: "/gallery",
        btnCheck: "View Gallery"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Company",
        info: "Three companies open within the country!",
        path: "/contact",
        btnCheck: "Contact"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "8K+",
        info: "Over 8000 plus funiture products sold out!",
        path: "/gallery",
        btnCheck: "View Gallery"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "260+",
        info: "we still have some variant furniture. check our gallery!",
        path: "/gallery",
        btnCheck: "View Gallery"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Office",
        desc: "We can designs your offices with Innovative Design Solutions."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Home",
        desc: "We can beautify your Homes with Innovative Design Solution that suits your taste and needs."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Hotel & Lounge ",
        desc: "beautify and design your Hotel room & Lounge with the best Innovative Design Solutions."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Event Hall",
        desc: "We can create a stylish funiture and comfortable environment that suits your taste and needs."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What types of furniture do you specialize in?",
        answer: "We specialize in crafting a wide range of furniture, including custom pieces, for both residential and commercial spaces."
    },
    {
        id: 2,
        question: "What materials do you use in your furniture construction?",
        answer: "We use high-quality materials such as hardwoods, reclaimed wood, and premium finishes to ensure durable and aesthetically pleasing furniture."
    },
    {
        id: 3,
        question: "Can you create custom furniture based on my specific design preferences?",
        answer: "Absolutely! We offer custom furniture design services tailored to your unique style and requirements."
    },
    {
        id: 4,
        question: "How long does it typically take to complete a custom furniture project?",
        answer: "The timeline for a custom project varies depending on the complexity and size, but we strive to provide accurate timelines during the consultation phase."
    },
    {
        id: 5,
        question: "Do you offer delivery and installation services for the furniture?",
        answer: "Yes, we provide delivery and professional installation services to ensure your furniture is set up properly and efficiently."
    },
    {
        id: 6,
        question: "What is your pricing structure for custom furniture projects?",
        answer: "Our pricing depends on factors such as materials, design complexity, and size. We provide detailed quotes during the consultation process."
    },
    {
        id: 7,
        question: "Can you refurbish or restore old furniture?",
        answer: "Absolutely, we offer furniture refurbishment and restoration services to breathe new life into your cherished pieces."
    },
    {
        id: 8,
        question: "Are your carpenters skilled and experienced?",
        answer: "Yes, our carpenters are highly skilled and have extensive experience in crafting and working with various types of wood."
    },
    {
        id: 9,
        question: "Do you provide a warranty for your furniture?",
        answer: "Yes, we stand by the quality of our workmanship and materials. Our furniture comes with a warranty for your peace of mind."
    },
    {
        id: 10,
        question: "How can I schedule a consultation for a furniture project?",
        answer: "You can easily schedule a consultation by contacting us through our website or giving us a call. We'll be happy to discuss your project in detail."
    }
];









export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I am truly impressed with the craftsmanship and attention to detail that this furniture company brings to every piece. Their dedication to quality is unparalleled, making them my go-to choice for furnishing my home.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "As a software engineer, I appreciate precision and excellence. This furniture company not only meets but exceeds my expectations. Each piece is a testament to their commitment to creating functional and stylish furniture.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "In my role as a university lecturer, I seek furniture that combines aesthetics with comfort. This company consistently delivers on both fronts. Their pieces add a touch of sophistication to any space.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "I've entrusted this furniture company to furnish multiple spaces, and each time, they've exceeded my expectations. Their commitment to customer satisfaction is evident in the quality of their work. Highly recommended!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Being a pharmacist, I value precision and reliability. This furniture company delivers on both fronts. The attention to detail in their designs and the durability of their pieces make them a top choice for anyone seeking quality furniture.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
];








export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 5000.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 7770.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 9980.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]








const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Hamid Ola Hammed',
        job: 'CEO of Ola-Success',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel olawale',
        job: 'Furniture designer Manager',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
       },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Queen',
        job: 'House Furniture Designer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'House Roofing manager',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Office Furniture Designer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Adeleke Abiodun',
        job: 'Software Engineer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]