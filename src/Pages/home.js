import React from 'react';
function Home() {
    return (
        <main>
            <section>
                <h1>
                    We aim to change how we<br/>
                    think about coding forever<br/>
                    by harnessing AI computing to <br/>
                    generate code from mindmaps.
                    <br/>
                    {/*<div className="scrollDown">*/}
                    {/*    V*/}
                    {/*</div>*/}
                </h1>
                <a href="https://forms.gle/g378D2EMSFTQ3bjd8" target="_blank">
                    <button className="waitlistButton">
                        Join the Waitlist
                    </button>
                </a>
            </section>
        </main>
    );
};

export default Home;