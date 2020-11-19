import React, { useState, useEffect } from "react";
import { convertToRaw, EditorState } from "draft-js";

import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
    Container,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    HStack,
    Select,
    Box,
    Button,
    RadioGroup,
    Stack,
    Radio,
    InputLeftElement,
    InputGroup
} from "@chakra-ui/react";
import CommonLayout from "../../shared/CommonLayout";
import DatePicker from "react-datepicker";
import { Editor } from "react-draft-wysiwyg";
import AddressInput from "../../components/AddressInput";
import ImageBox from "../../components/ImageBox";
import EventSchema from "../../utils/CreateEventSchema";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inertia } from "@inertiajs/inertia";
import { format } from "date-fns";

const CreateEvent = ({ categories, user }) => {
    const [location, setLocation] = useState("online");
    const [pricingModel, setPricingModel] = useState("paid");
    const [attendanceModel, setAttendanceModel] = useState("limited");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const { register, handleSubmit, errors, setValue, control } = useForm({
        resolver: yupResolver(EventSchema)
    });
    const prepareDate = (date, time) => {
        let d = format(date, "yyyy-MM-dd");
        let t = time.toLocaleTimeString();
        return format(new Date(`${d}T${t}`), "yyyy-MM-dd hh:mm:ss");
    };
    const submitData = data => {
        data = { ...data, user_id: user.id };
        data.startDate = prepareDate(data.startDate, data.startTime);
        data.endDate = prepareDate(data.endDate, data.endTime);
        const formData = new FormData();
        for (const name in data) {
            formData.append(name, data[name]);
        }
        Inertia.post("/events", formData);
    };
    useEffect(() => {
        register("description");
    }, [register]);

    const handleEditorChange = editorState => {
        setEditorState(editorState);
        setValue(
            "description",
            JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        );
    };
    return (
        <CommonLayout title="Create New Event">
            <Container
                maxW="815px"
                minH="100vh"
                mt={6}
                p={6}
                display="flex"
                flexDirection="column"
                borderWidth="1px"
                borderColor="gray.300"
                bg="white"
            >
                <Flex justify="space-between" mb={10}>
                    <Heading color="gray.700">Create your event</Heading>
                    <HStack>
                        <Button
                            variant="outline"
                            variant="outline"
                            colorScheme="gray"
                        >
                            Discard
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => setSubmitAction("draft")}
                        >
                            Save Draft
                        </Button>
                    </HStack>
                </Flex>
                <Flex
                    as="form"
                    rounded="md"
                    direction="column"
                    noValidate
                    onSubmit={handleSubmit(submitData)}
                >
                    <FormControl
                        id="title"
                        isRequired
                        mb={6}
                        isInvalid={errors.title}
                    >
                        <FormLabel fontWeight="bold">Title</FormLabel>
                        <Input
                            placeholder="Please enter title of event"
                            size="lg"
                            name="title"
                            ref={register}
                        />
                        {!!errors.title ? (
                            <FormErrorMessage mt={2}>
                                {errors.title.message}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>
                    <FormControl mb={6} isInvalid={errors.organizer}>
                        <FormLabel fontWeight="bold">Organizer</FormLabel>
                        <Input
                            size="lg"
                            value={user?.name}
                            variant="filled"
                            isDisabled
                            name="organizer"
                        />
                        {!!errors.organizer ? (
                            <FormErrorMessage mt={2}>
                                {errors.organizer.message}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>

                    <FormControl
                        id="category"
                        mb={6}
                        isInvalid={errors.category}
                    >
                        <FormLabel fontWeight="bold">Category</FormLabel>
                        <Select
                            placeholder="Select Event Category"
                            size="lg"
                            name="category"
                            ref={register}
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.name}>
                                    {cat.name}
                                </option>
                            ))}
                        </Select>
                        {!!errors.category ? (
                            <FormErrorMessage mt={2}>
                                {errors.category.message}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>
                    <FormControl mb={6} isInvalid={errors.location}>
                        <FormLabel fontWeight="bold">Location</FormLabel>
                        <RadioGroup onChange={setLocation} value={location}>
                            <Stack direction="row" spacing={10}>
                                <Radio
                                    value="online"
                                    colorScheme="red"
                                    ref={register}
                                    name="location"
                                >
                                    Online
                                </Radio>
                                <Radio
                                    value="venue"
                                    colorScheme="red"
                                    ref={register}
                                    name="location"
                                >
                                    Venue
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    {location === "venue" && (
                        <AddressInput
                            inputRef={register}
                            error={errors.venue}
                        />
                    )}
                    <Flex justify="space-between" mb={6}>
                        <FormControl
                            isRequired
                            flexBasis="35%"
                            isInvalid={errors.startDate}
                        >
                            <FormLabel fontWeight="bold">Start Date</FormLabel>
                            <Controller
                                control={control}
                                defaultValue={Date.now()}
                                name="startDate"
                                render={({ onChange, onBlur, value }) => (
                                    <DatePicker
                                        selected={value}
                                        onChange={onChange}
                                        isClearable
                                        dateFormat="dd/MM/yyyy"
                                        customInput={
                                            <Input size="lg" name="startDate" />
                                        }
                                    />
                                )}
                            />
                            {!!errors.startDate ? (
                                <FormErrorMessage mt={2}>
                                    {errors.startDate.message}
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                        <FormControl
                            isRequired
                            flexBasis="35%"
                            isInvalid={errors.startTime}
                        >
                            <FormLabel fontWeight="bold">Start Time</FormLabel>
                            <Controller
                                control={control}
                                defaultValue={Date.now()}
                                name="startTime"
                                render={({
                                    onChange,

                                    value
                                }) => (
                                    <DatePicker
                                        selected={value}
                                        onChange={onChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption="Time"
                                        isClearable
                                        dateFormat="HH:mm"
                                        customInput={
                                            <Input size="lg" name="startTime" />
                                        }
                                    />
                                )}
                            />
                            {!!errors.startTime ? (
                                <FormErrorMessage mt={2}>
                                    {errors.startTime.message}
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                    </Flex>
                    {/* //End Date and Time */}
                    <Flex mb={6} justify="space-between">
                        <FormControl
                            isRequired
                            flexBasis="35%"
                            isInvalid={errors.endDate}
                        >
                            <FormLabel fontWeight="bold">End Date</FormLabel>
                            <Controller
                                control={control}
                                defaultValue={Date.now()}
                                name="endDate"
                                render={({ onChange, onBlur, value }) => (
                                    <DatePicker
                                        selected={value}
                                        onChange={onChange}
                                        isClearable
                                        dateFormat="dd/MM/yyyy"
                                        customInput={
                                            <Input size="lg" name="endDate" />
                                        }
                                    />
                                )}
                            />
                            {!!errors.endDate ? (
                                <FormErrorMessage mt={2}>
                                    {errors.endDate.message}
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                        <FormControl
                            isRequired
                            flexBasis="35%"
                            isInvalid={errors.endDate}
                        >
                            <FormLabel fontWeight="bold">End Time</FormLabel>
                            <Controller
                                control={control}
                                defaultValue={Date.now()}
                                name="endTime"
                                render={({
                                    onChange,
                                    onBlur,
                                    value,
                                    defaultValue
                                }) => (
                                    <DatePicker
                                        defaultValue={defaultValue}
                                        selected={value}
                                        onChange={onChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption="Time"
                                        isClearable
                                        dateFormat="HH:mm"
                                        customInput={
                                            <Input size="lg" name="endTime" />
                                        }
                                    />
                                )}
                            />
                            {!!errors.endTime ? (
                                <FormErrorMessage mt={2}>
                                    {errors.endTime.message}
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                    </Flex>
                    <Flex justifyContent="space-between" mb={6}>
                        <FormControl flexBasis="35%">
                            <FormLabel fontWeight="bold">Price</FormLabel>
                            <RadioGroup
                                onChange={setPricingModel}
                                value={pricingModel}
                            >
                                <Stack direction="row" spacing={10}>
                                    <Radio
                                        value="free"
                                        colorScheme="red"
                                        ref={register}
                                        name="priceModel"
                                    >
                                        Free
                                    </Radio>
                                    <Radio
                                        value="paid"
                                        colorScheme="red"
                                        ref={register}
                                        name="priceModel"
                                    >
                                        Paid
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                        <FormControl flexBasis="35%">
                            <FormLabel fontWeight="bold">
                                Max number of attendees
                            </FormLabel>
                            <RadioGroup
                                onChange={setAttendanceModel}
                                value={attendanceModel}
                            >
                                <Stack direction="row" spacing={10}>
                                    <Radio
                                        value="limited"
                                        colorScheme="red"
                                        ref={register}
                                        name="attendanceModel"
                                    >
                                        Limited
                                    </Radio>
                                    <Radio
                                        value="unlimited"
                                        colorScheme="red"
                                        ref={register}
                                        name="attendanceModel"
                                    >
                                        Unlimited
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Flex>
                    <Flex mb={6} justify="space-between">
                        {pricingModel === "paid" && (
                            <FormControl
                                flexBasis="35%"
                                isInvalid={errors.price}
                            >
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        fontSize="1.2em"
                                        children="€"
                                        size="lg"
                                    />
                                    <Input
                                        placeholder="Enter ticket price"
                                        name="price"
                                        ref={register}
                                    />
                                </InputGroup>
                                {!!errors.price ? (
                                    <FormErrorMessage mt={2}>
                                        {errors.price.message}
                                    </FormErrorMessage>
                                ) : null}
                            </FormControl>
                        )}
                        {attendanceModel === "limited" && (
                            <FormControl
                                flexBasis="35%"
                                marginLeft={
                                    pricingModel === "free" ? "65%" : "0%"
                                }
                                isInvalid={errors.maxAttendance}
                            >
                                <Input
                                    placeholder="Enter max number of attendees"
                                    type="number"
                                    name="maxAttendees"
                                    ref={register}
                                />
                                {!!errors.maxAttendance ? (
                                    <FormErrorMessage mt={2}>
                                        {errors.maxAttendance.message}
                                    </FormErrorMessage>
                                ) : null}
                            </FormControl>
                        )}
                    </Flex>
                    <FormControl mb={6} isInvalid={errors.description}>
                        <FormLabel fontWeight="bold">Description</FormLabel>
                        <Box
                            rounded="sm"
                            borderWidth=".5px"
                            borderColor="gray.200"
                            minH="215px"
                            overflow="hidden"
                        >
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={handleEditorChange}
                                hashtag={{
                                    separator: " ",
                                    trigger: "#"
                                }}
                                name="description"
                            />
                        </Box>
                        {!!errors.description ? (
                            <FormErrorMessage mt={2}>
                                {errors.description.message}
                            </FormErrorMessage>
                        ) : null}
                    </FormControl>
                    <ImageBox
                        register={register}
                        setValue={setValue}
                        error={errors.coverImage}
                    />
                    <HStack alignSelf="flex-end">
                        <Button
                            variant="outline"
                            variant="outline"
                            colorScheme="gray"
                            onClick={() => setSubmitAction("draft")}
                        >
                            Save Draft
                        </Button>
                        <Button colorScheme="red" type="submit">
                            Publish
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </CommonLayout>
    );
};

export default CreateEvent;
