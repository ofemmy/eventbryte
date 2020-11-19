import { Flex, Text, Input, Box, Image, Fade } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { BiImageAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { appendErrors } from "react-hook-form";
const ImageBox = ({ register, setValue, error }) => {
    const fileInputRef = useRef();
    const [image, setImage] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [imagePreview, setImagePreview] = useState("");
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setImagePreview(null);
        }
    }, [image]);
    useEffect(() => {
        register("coverImage");
    }, [register]);

    const getFileName = file => {
        if (file && file.type.substr(0, 5) == "image") {
            setImage(file);
        } else {
            setImage(null);
        }
    };
    const handleChange = e => {
        const file = e.target.files[0];
        //set file into main form data
        setValue("coverImage", e.target.files[0]);
        getFileName(file);
    };
    return (
        <Box
            width="423px"
            height="221px"
            pos="relative"
            _hover={{ cursor: "pointer", boxShadow: "md" }}
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            mb={6}
        >
            {imagePreview ? (
                <>
                    <Image
                        objectFit="cover"
                        src={imagePreview}
                        width="100%"
                        height="100%"
                    />
                    {isHovered && (
                        <Fade in={isHovered}>
                            <Flex
                                justify="center"
                                align="center"
                                position="absolute"
                                top="auto"
                                bottom="0"
                                width="100%"
                                height="100%"
                                bg="black"
                                opacity="0.85"
                            >
                                <AiFillDelete
                                    color="white"
                                    size="50px"
                                    onClick={() => setImage(null)}
                                />
                            </Flex>
                        </Fade>
                    )}
                </>
            ) : (
                <Flex
                    width="100%"
                    height="100%"
                    bg="gray.200"
                    direction="column"
                    justify="center"
                    align="center"
                    rounded="sm"
                    onClick={() => fileInputRef.current.click()}
                >
                    <BiImageAlt size="50px" />
                    <Text fontSize="2xl">Click to upload cover image</Text>
                    <Input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        display="none"
                        onChange={handleChange}
                    />
                    <Text>2160x1080px (.jpeg or .png Max Size-10MB)</Text>
                    <Text>{imagePreview}</Text>
                </Flex>
            )}
            {error ? (
                <Text color="primary-dark" mt={2}>
                    {error.message}
                </Text>
            ) : null}
        </Box>
    );
};

export default ImageBox;
