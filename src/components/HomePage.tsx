import logo from './logo.svg';
import './App.css';
import React from 'react';
const Bold = (props) => {
    const styles = {
        fontWeight: 'bold',
    };

    return <span style={styles}>{props.children}</span>;
};

// NavBar Component
function NavBar() {
    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: '#3F6656',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            zIndex: 2,
            width: '95%',
            borderRadius: '10px',
            backgroundColor: '#3F6656',
        },
        logo: {
            fontSize: '50px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
        },
        searchBox: {
            flex: 1,
            marginLeft: '20px',
            marginRight: '20px',
            width: '23px',
            height: '20%',
            borderRadius: '10px',
        },
        userControls: {
            display: 'flex',
            gap: '15px',
        },
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>
                <span style={{ fontSize: 45 }} role="img" aria-label="camel">
                    🐫
                </span>
            </div>
            <h1 style={{ fontSize: 45, color: 'white' }}>CAMEL</h1>
            <div style={styles.userControls}>
                <BottomComponent content="Sign Up"></BottomComponent>
                <BottomComponent content="Login"></BottomComponent>
            </div>
        </div>
    );
}

// Card Component
// function Card({ title, content, imageUrl, subText }) {
//     const styles = {
//         heading: {
//             color: '#349A74',
//         },
//         card: {
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '10px',
//             margin: '20px',
//             width: '30%',
//             backdropFilter: 'blur(10px)',
//             backgroundColor: 'rgba(255, 255, 255, 1.0)',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//         },
//         cardImage: {
//             width: '200px',
//             height: '200px',
//             borderRadius: '50%',
//             margin: '0 auto 20px',
//             textAlign: 'center',
//         },
//         cardTitle: {
//             textAlign: 'center',
//             marginBottom: '80px',
//             fontSize: '30px',
//         },
//     };

//     return (
//         <div style={styles.card}>
//             <h3 style={styles.cardTitle}>{title}</h3>
//             {imageUrl && (
//                 <img src={imageUrl} alt={title} style={styles.cardImage} />
//             )}
//             {subText && <h3 style={styles.heading}>{subText}</h3>}
//             <p>{content}</p>
//         </div>
//     );
// }

// HomePage Component
function HomePage() {
    const styles = {
        container: {
            backgroundImage:
                'url(https://media.istockphoto.com/id/174929957/photo/christmas-decoration.jpg?s=612x612&w=0&k=20&c=ekEiz4LG3zVQcu7gMaFi5FADxfk6mt5uS--vNYudxMQ=)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#FFFFFF',
            color: '',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        cards: {
            display: 'flex',
            width: '90%',
            justifyContent: 'space-between',
        },
    };

    return (
        <div style={styles.container}>
            <NavBar />

            <h1 style={{ color: 'white' }}>
                {<Bold> Cloud Asset Management Enhanced Launcher</Bold>}
            </h1>
            <div style={styles.cards}>
                <Card
                    title="Our Product"
                    content={
                        <>
                            <Bold>
                                Cloud Asset Management Enhanced Launcher (CAMEL)
                            </Bold>{' '}
                            is aimed towards...aimed towards assisting Project
                            Managers in running and managing their businesses
                            efficiently. Through the use of this application.
                            Business Owners will be able to make wiser and
                            informed decisions
                        </>
                    }
                />
                <Card
                    title="Features"
                    content={
                        <div>
                            • All-In-One Dashboard <br />
                            <br />
                            • Document Management <br />
                            <br />
                            • Time Tracking and Management...
                            <br />
                            <br />
                            • Reporting and Visualization Tools
                            <br />
                            <br />
                            • Task Prioritization and Scheduling
                            <br />
                            <br />
                            • Business Overview Analytics
                            <br />
                            <br />• Project’s Overviews
                        </div>
                    }
                />
                <Card
                    title="Testimonials"
                    imageUrl="https://media.discordapp.net/attachments/1148835751254048809/1165851225737150495/IMG_4832.jpg?ex=65485a90&is=6535e590&hm=998c7ec3370db50cef14de4cae2adb72cbe0c7301a2dd46e870be0347a0df187&=&width=808&height=1076"
                    subText={'Hashem Jaber'}
                    content="CAMEL has been instrumental in enhancing our product management workflow. The intuitive dashboards and analytical tools have enabled me to make data-driven decisions that have significantly enhanced my projects success rates"
                />
            </div>
            <BottomComponent content="Join us!"></BottomComponent>
        </div>
    );
}

const BottomComponent = ({ content }) => {
    return <button style={styles.button}>{content}</button>;
};

const styles = {
    bottomSection: {
        backgroundColor: '#5A8472',
        padding: '20px 0',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#5A8472',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        padding: '10px 20px',
        marginBottom: '10px',
        transition: 'background-color 0.3s, color 0.3s',
        ':hover': {
            backgroundColor: '#6BCBA0',
            color: '#DFF8E7',
        },
    },
    text: {
        color: 'white',
        fontSize: '16px',
        margin: '0',
    },
};

function App() {
    return (
        <div style={{ backgroundColor: 'black', height: '100%' }}>
            <HomePage />
        </div>
    );
}

import Card from '@/components/HomePage/Card';
import Image from 'next/image';

const cardOneContent = (
    <p className="leading-9">
        <b>Cloud Asset Management Enhanced Launcher (CAMEL)</b>
        is aimed towards assisting Project Managers in running and managing
        their businesses efficiently. Through the use of this application,
        Business Owners will be able to make wiser and informed decisions
    </p>
);

const cardTwoContent = (
    // <div>
    <ul className="list-disc leading-8">
        <li>All-In-One Dashboard</li>
        <li>Document Management</li>
        <li>Time Tracking and Management</li>
        <li>Reporting and Visualization Tools</li>
        <li>Task Prioritization and Scheduling</li>
        <li>Business Overview Analytics</li>
        <li>Project’s Overviews</li>
    </ul>
    // {/* </div> */}
);

const cardThreeContent = (
    <div className="flex flex-col gap-y-2 justify-center items-center">
        <Image
            src={'/images/hashemtmp.jpeg'}
            width={100}
            height={100}
            alt="testimonial-image"
            className="rounded-full"
        />
        {/* <div className="testimonial-name"> */}
        <h5 className="testiominal-name font-bold text-primary-green-700">
            Hashem Jaber
        </h5>

        <div className="testimonial-text">
            <p>
                CAMEL has been instrumental in enhancing our product management
                workflow. The intuitive dashboards and analytical tools have
                enabled me to make data-driven decisions that have significantly
                enhanced my projects success rates
            </p>
        </div>
        {/* </div> */}
    </div>
);

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col md:flex-row gap-2 p-2">
                <Card title="Our Product" content={cardOneContent} />
                <Card title="Features" content={cardTwoContent} />
                <Card title="Testimonials" content={cardThreeContent} />
            </div>
        </main>
    );
}
