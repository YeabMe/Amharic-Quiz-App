import React from 'react';

const Result = ({ showResult, quizs, marks, startOver }) => {
    return (
        <section className="bg-white text-dark" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 1 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 1 / 2) ? 'ዋው!' : 'ውይ!'}</h1>
                            <h3 className='mb-3 fw-bold'>ያገኙት ውጤት {marks} ከ {quizs.length * 1} ነው</h3>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>አንደገና ለመጀመር</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;