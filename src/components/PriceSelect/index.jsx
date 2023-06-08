import { useState } from "react";
import { SectionTitle } from "../SectionTitle";
import FormPrice from "./FormPrice";

export const PriceSelect = () => {
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (formData) => {
      // Обработка отправленных данных формы
      setSubmittedData(formData);
      console.log(submittedData)
    };

    return (
        <div className="container p-5" data-scroll-section>
            <div className="flex lg:flex-row flex-col gap-5" data-scroll data-scroll-speed="0.2">
                <div className="lg:w-2/4 w-full pr-12">
                    <SectionTitle title="Find out the price right now" />
                    <SectionTitle title="use our shipping cost calculator" styleElement="text-white" />
                </div>
                <FormPrice onSubmit={handleSubmit} />
            </div>
        </div>
    )
}