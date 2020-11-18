import * as yup from "yup";
const FILE_SIZE_LIMIT = 200000;
//custom function to vaildate inputs with timestamps; default cast expects string
const customDate = () =>
    yup.date("Date is invlaid").transform(function(castValue, originalValue) {
        return this.isType(castValue) ? castValue : new Date(originalValue);
    });

export default yup.object().shape({
    title: yup
        .string()
        .required("Title is required")
        .max(200),
    category: yup.string().notRequired("Category is notRequired"),
    startDate: customDate().notRequired(),
    startTime: customDate().notRequired(),
    endDate: customDate().notRequired(),
    endTime: customDate().notRequired(),
    location: yup.string().notRequired(),
    addressLine1: yup.mixed().when("location", {
        is: "venue",
        then: yup
            .mixed()
            .notRequired()
            .test("addressLine1", value => {
                if (!!value) {
                    const schema = yup.string();
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    addressLine2: yup.mixed().when("location", {
        is: "venue",
        then: yup
            .mixed()
            .notRequired()
            .test("addressLine2", value => {
                if (!!value) {
                    const schema = yup.string();
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    zipcode: yup.mixed().when("location", {
        is: "venue",
        then: yup
            .mixed()
            .notRequired()
            .test("zipcode", value => {
                if (!!value) {
                    const schema = yup.number();
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    city: yup.mixed().when("location", {
        is: "venue",
        then: yup
            .mixed()
            .notRequired()
            .test("city", value => {
                if (!!value) {
                    const schema = yup.string();
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    country: yup.mixed().when("location", {
        is: "venue",
        then: yup
            .mixed()
            .notRequired()
            .test("country", value => {
                if (!!value) {
                    const schema = yup.string();
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    priceModel: yup.string(),
    price: yup.mixed().when("priceModel", {
        is: "paid",
        then: yup
            .mixed()
            .notRequired()
            .test("price", value => {
                if (!!value) {
                    const schema = yup
                        .number()
                        .min(0)
                        .default(0);
                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    attendanceModel: yup.string(),
    maxAttendees: yup.mixed().when("attendanceModel", {
        is: "limited",
        then: yup
            .mixed()
            .notRequired()
            .test("maxAttendees", value => {
                if (!!value) {
                    const schema = yup
                        .number()
                        .default(10000000)
                        .min(1);

                    return schema.isValidSync(value);
                }
                return true;
            })
    }),
    description: yup
        .string()
        .notRequired()
        .test("description", value => {
            if (!!value) {
                const schema = yup.string();
                return schema.isValidSync(value);
            }
            return true;
        }),
    coverImage: yup
        .mixed()
        .notRequired()
        .test("imageSize", "File size is too large", image => {
            if (!!image) {
                return image.size <= FILE_SIZE_LIMIT;
            }
            return true;
        })
        .test("fileType", "Invalid file type", image => {
            if (!!image) {
                return [
                    "image/jpg",
                    "image/jpeg",
                    "image/png"
                ].includes(image.type);
            }
            return true;
        })

    // .image()
    // .test("imageSize", "File is too large", image => image.size <=FILE_SIZE_LIMIT)
    // .test("fileType", "invalid file type", image =>
    //     ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(
    //         image.type
    //     ))
});
