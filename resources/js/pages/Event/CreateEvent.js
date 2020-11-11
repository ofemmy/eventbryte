import React,{useEffect,useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
    Container,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Select,
    Divider,
    Button,
    RadioGroup,
    Stack,
    Radio,
    Box
} from "@chakra-ui/core";
import AddressInput from "../../components/AddressInput";
import Layout from "../../shared/Layout";
import DatePicker from "react-datepicker";

const CreateEvent = ({ categories,user }) => {
    const [showVenue, setShowVenue] = useState(false);
    const [location, setLocation] = useState("online");
    const [startDate, setStartDate] = useState(Date.now())
    const [endDate, setEndDate] = useState(Date.now())
    const [startTime, setStartTime] = useState(Date.now())
    const [endTime, setEndTime] = useState(Date.now())
    useEffect(() => {
        location=="venue"?setShowVenue(true):setShowVenue(false);
    }, [location])
    return (
        <Layout title="Create New Event">
            <Container
                maxW="815px"
                minH="100vh"
                mt={6}
                p={6}
                display="flex"
                flexDirection="column"
                borderWidth="1px"
                borderColor="gray.300"
            >
                <Flex justify="space-between" mb={10}>
                    <Heading color="gray.700">Create your event</Heading>
                    <HStack>
                        <Button variant="outline" variant="outline" colorScheme="gray">Discard</Button>
                        <Button colorScheme="red">Save Draft</Button>
                    </HStack>
                </Flex>
                <Flex as="form" rounded="md" direction="column" noValidate>
                    <FormControl id="title" isRequired mb={6}>
                        <FormLabel fontWeight="bold">Title</FormLabel>
                        <Input
                            placeholder="Please enter title of event"
                            size="lg"
                        />
                    </FormControl>

                    <FormControl id="category" isRequired mb={6}>
                        <FormLabel fontWeight="bold">Category</FormLabel>
                        <Select placeholder="Select Event Category" size="lg">
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.name}>
                                    {cat.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired mb={6}>
                    <FormLabel fontWeight="bold">Location</FormLabel>
                        <RadioGroup onChange={setLocation} value={location}>
                            <Stack direction="row" spacing={10}>
                                <Radio value="online" colorScheme="red">Online</Radio>
                                <Radio value="venue" colorScheme="red">Venue</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>

                    {showVenue&&<AddressInput/>}
                    <Flex
                    justify="space-between" mb={6}>
                    <FormControl isRequired>
                    <FormLabel fontWeight="bold" >
                        Start Date
                    </FormLabel>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}
                    isClearable
                    dateFormat="dd/MM/yyyy"
                    customInput={<Input size="lg"/>}
                    />
                    </FormControl>
                    <FormControl isRequired >
                    <FormLabel fontWeight="bold" >
                        Start Time
                    </FormLabel>
                    <DatePicker selected={startTime}
                     onChange={date => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    isClearable
                    dateFormat="h:mm aa"
                    customInput={<Input size="lg"/>}
                    />
                    </FormControl>
                    </Flex>
{/* //End Date and Time */}
                    <Flex
                    mb={6}

                    justify="space-between">
                    <FormControl isRequired >
                    <FormLabel fontWeight="bold" >
                        End Date
                    </FormLabel>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)}
                    isClearable
                    dateFormat="dd/MM/yyyy"
                    customInput={<Input size="lg" />}
                    />
                    </FormControl>
                    <FormControl isRequired >
                    <FormLabel fontWeight="bold" >
                        End Time
                    </FormLabel>
                    <DatePicker selected={endTime}
                     onChange={date => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    isClearable
                    dateFormat="h:mm aa"
                    customInput={<Input size="lg"  />}
                    />
                    </FormControl>
                    </Flex>
                    <FormControl isRequired>
                        <FormLabel fontWeight="bold">Organizer</FormLabel>
                        <Input size="lg" value={user?.name} variant="filled" isDisabled/>
                    </FormControl>

                </Flex>
            </Container>
        </Layout>
    );
};

export default CreateEvent;
