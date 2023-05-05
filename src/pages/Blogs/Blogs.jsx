import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
    return (
        <Container className='my-5 py-5'>
            <div className='text-center py-2 rounded'>
                <Pdf targetRef={ref} filename="">
                    {({ toPdf }) => <button className='btn btn-secondary fw-bold mx-auto' onClick={toPdf}>Generate PDF</button>}
                </Pdf>
            </div>
            <div ref={ref}>
                <Card className='my-5 p-5' >
                    <Card.Body>
                        <Card.Title className='text-center fw-bold mb-4'>
                            <FaArrowRight className='text-danger me-3'></FaArrowRight>
                            What the differences between uncontrolled and controlled components?
                        </Card.Title>
                        <Card.Text>
                            In React, controlled components and uncontrolled components are two different ways of managing the state of form components.
                            Controlled components are form components that are fully controlled by React's state. This means that the parent component passes down a value and a change handler function as props to the child component, and the child component uses these to update its state and to notify the parent component of any changes. Because the parent component controls the state of the child component, it can enforce validation rules and trigger additional actions based on the form data.Uncontrolled components, on the other hand, manage their own state internally using the browser's native DOM API. This means that the parent component does not control the state of the child component, and instead relies on the child component to manage its own state. Uncontrolled components are useful when we need a simple form without complex validation or business logic, or when we want to integrate with existing code that uses the native DOM API.
                            Both controlled and uncontrolled components have their own use cases, and choosing between them depends on the specific requirements of our application.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='my-5 p-5' >
                    <Card.Body>
                        <Card.Title className='text-center fw-bold mb-4'>
                            <FaArrowRight className='text-danger me-3'></FaArrowRight>
                            How to validate React props using PropTypes?
                        </Card.Title>
                        <Card.Text>
                            React provides a utility library called PropTypes that allows developers to validate the data type of props being passed down from parent components to child components.By using PropTypes, developers can ensure that the data being passed as props is of the correct type and shape. This can help catch errors early on in the development process and make it easier to maintain and debug the application.PropTypes also provide documentation for other developers who might be working on the same codebase, making it easier for them to understand what props a component expects and what their data types should be.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='my-5 p-5' >
                    <Card.Body>
                        <Card.Title className='text-center fw-bold mb-4'>
                            <FaArrowRight className='text-danger me-3'></FaArrowRight>
                            What is the difference between nodejs and express js?
                        </Card.Title>
                        <Card.Text>
                            Node.js and Express.js are two different things, but they are often used together to build web applications.Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, which makes it possible to build fast and scalable network applications. Node.js provides a wide range of built-in modules for working with files, networking, cryptography, and more, making it a powerful tool for building server-side applications.Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and templating. Express.js is designed to be minimal and flexible, which makes it easy to customize and extend. It is often used as the backend for single-page applications and RESTful APIs.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='my-5 p-5' >
                    <Card.Body>
                        <Card.Title className='text-center fw-bold mb-4'>
                            <FaArrowRight className='text-danger me-3'></FaArrowRight>
                            What is a custom hook, and why we will create a custom hook?
                        </Card.Title>
                        <Card.Text>
                            Custom React Hooks offer reusability, which makes the code cleaner and reduces the time it takes to write the code. They can also enhance the rendering speed of the code by avoiding unnecessary re-renders. A custom React Hook is a function that starts with the word "use" and that allows we to reuse stateful logic in our components. By encapsulating common logic in a custom Hook, we can make our code more modular, easier to read, and easier to maintain. We might create a custom Hook for several reasons. One reason is to extract complex logic from a component and reuse it across multiple components. This can greatly reduce code duplication and make the code easier to maintain. Another reason is to encapsulate stateful logic that needs to be shared across different components, such as data fetching or form handling. Custom Hooks can also improve performance by avoiding unnecessary re-renders. When a Hook is used in a component, React only re-renders that component when the state managed by the Hook changes. This can be much more efficient than re-rendering the entire component tree, which can be slow and resource-intensive.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Blogs;