import React from 'react';

const ContactPage = () => {
    return (
        <>
            <section className="bg-white dark:bg-slate-800" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h1 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                Get in Touch
                            </h1>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                                We'd love to hear from you!
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                    We are committed to providing you with the best service possible. If you have any questions or concerns, please don't hesitate to reach out to us.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">Jhamsikhel road straight from jawalkhel</p>
                                            <p className="text-gray-600 dark:text-slate-400">Jhamsikhel,Nepal</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                            </h3>
                                            <p className="text-gray-600 dark:text-slate-400">Mobile: 977-9823456789</p>
                                            <p className="text-gray-600 dark:text-slate-400">Mail: contact@example.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                                hours</h3>
                                            <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 09:00 - 22:00</p>
                                            <p className="text-gray-600 dark:text-slate-400">Saturday: 10:00 - 23:00</p>
                                            <p className="text-gray-600 dark:text-slate-400">Sunday: Closed</p>
                                        </div>
                                    </li>
                                    
                                </ul>
                              
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name"/>
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p>
                                <iframe
                                    title="Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3347407861606!2d85.31085927551888!3d27.676047176200566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199540949d99%3A0xb1eb7c859c67a76b!2sL%E2%80%99Italiano%20Restaurant!5e0!3m2!1sen!2snp!4v1730381180604!5m2!1sen!2snp"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                </p>
                </div>
                
            </section>
        </>
    );
}

export default ContactPage;
