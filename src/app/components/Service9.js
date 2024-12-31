import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faCannabis,
    faRandom,
    faGlobe,
    faCommentSms,
    faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
    {
        icon: faGlobe,
        title: "طراحی و توسعه وبسایت",
        description:
            "طراحی ، توسعه و SEO وب سایت با بهره گیری از نیروی متخصص و بروزترین تکنولوژی مناسب برای کسب وکار شما",
    },
    {
        icon: faCommentSms,
        title: "SMS Marketing",
        description:
            "پرقدرت ترین سامانه ارسال پیامک انبوه تبلیغاتی و اطلاع رسانی با کامل ترین امکانات و گزارشات شفاف و دقیق",
    },
    {
        icon: faDatabase,
        title: "بانک های اطلاعاتی",
        description:
            "بروزترین بانک  اطلاعاتی شماره موبایل با بیش از ۵۰ میلیون شماره موبایل در سراسر کشور با تفکیک مشاغل ، منطقه ، شهر و استان",
    },
];

const ServiceItem = ({ service }) => (
    <div className=" shadow-xl rounded-2xl p-6 pb-12 h-full">
        <div className="w-20 h-20 rounded-full text-3xl flex items-center justify-center -mt-16 shadow-2xl text-custom-yellowAti">
            <FontAwesomeIcon icon={service.icon} />
        </div>

        <div className="mt-6">
            <h4 className="text-2xl font-medium mb-4">{service.title}</h4>
            <p className="opacity-80">{service.description}</p>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

const Service9 = () => {
    return (
        <section className="ezy__service9 light py-14 md:py-24 z-[1] overflow-hidden px-20 py-20">
            <div className="container px-4 mx-auto">
                <div className="absolute top-16 right-0 bottom-16 left-1/2 lg:left-[60%] rounded-l-[30px] bg-opacity-10 w-[100vw] -z-[1]" />
                <div className="w-full max-w-xl mb-12">
                    <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
                        خدمات ما
                    </h2>
                    <p className="text-lg opacity-80 mb-6">
                        بهترین ها را از آتی پیام بخواهید، بیش از ۱۲ سال سابقه ارائه خدمات به بیش از ۲۸۰۰ کسب و کار مختلف
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 gap-y-24 md:gap-y-0 mt-20 max-w-7xl mx-auto">
                    {serviceList.map((service, i) => (
                        <div className="col-span-3 md:col-span-1" key={i}>
                            <ServiceItem service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service9;