const translations = {
    us: {
        headerFirst: "You have ",
        headerLast: " task(s) left!",
        headerZero: "You have no task left!",
        placeholder: "Enter task ...",
        submit: "Submit",
        checkbox: "Not finished only",
        footer: "Available on ",
        day: " days left",
    },
    vn: {
        headerFirst: "Bạn còn ",
        headerLast: " công việc nữa!",
        headerZero: "Bạn không còn công việc nào chưa hoàn thành!",
        placeholder: "Nhập tên công việc ...",
        submit: "Xác nhận",
        checkbox: "Chỉ những việc chưa hoàn thành",
        footer: "Chọn ngôn ngữ",
        day: " ngày nữa",
    },
};

export const getTranslation = (lang, text) => {
    return translations[lang][text];
};
