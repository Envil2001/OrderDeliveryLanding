
import { useState } from "react"
import { AccordionItem } from "../Accordion/accordionItem";
import { SectionTitle } from "../SectionTitle";
const accordionData = [
    {
        title: "Why do our client choose us?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "How do we deliver?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "Do you provide shipping insurance?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "How do we check the goods?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "How do we pack the goods?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "How to check the cargo?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
    {
        title: "How to calculate all expenses?",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem explicabo distinctio perferendis beatae officia dignissimos deleniti, fuga, aut, quas fugit est? Doloribus nisi commodi non ab neque tempore vitae.",
    },
]
export const FaqSection = () => {
    const [openAccordion, setOpenAccordion] = useState(false);
    const toggle = (index) => {
        if (openAccordion === index) {
            return setOpenAccordion(null)
        }
        setOpenAccordion(index)
    }
    return (
        <div className="container p-5" data-scroll-section>
            <div className="flex md:flex-row flex-col md:gap-0 gap-5 mb-20 md:space-x-5 space-x-0">
                <div className="md:w-2/6 w-full">
                    <SectionTitle title="FAQs" />
                </div>
                <div className="w-full">
                    {accordionData.map((accordion, index) => {
                        return <AccordionItem key={index} open={index === openAccordion} title={accordion.title} desc={accordion.desc} toggle={() => toggle(index)} />
                    })}
                </div>
            </div>
        </div>
    )
}