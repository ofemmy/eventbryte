import React,{useRef} from "react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogOverlay,
    AlertDialogHeader,
    AlertDialogCloseButton,
    AlertDialogFooter,
    Button,
    AlertDialogContent
} from "@chakra-ui/react";
const Alert = ({isOpen,onClose,message}) => {
    const cancelRef = useRef()
    return (
        <>
            {/* <Button onClick={onOpen}>Discard</Button> */}
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                       {message}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme="red" ml={3}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default Alert;

function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
}
