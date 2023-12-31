import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section className='text-dark text-center bg-white' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>የጠቅላላ እዉቀት ጥያቄ</h1>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-primary text-white fw-bold">ፈተናዉን ጀምር</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;