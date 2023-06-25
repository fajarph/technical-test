import React from "react"
import "./style.css"
import juice from "./img/juice.png"
import people from "./img/people.png"
import bgJus from "./img/bg-jus3.jpg"

const Home = () => {
    return(
        <div>
            <div className="container-fluid body">
                <div className="container">
                    <div className="description color-text">
                        <div className="row">
                            <div className="col-6">
                                <h2 className=" margin-style">
                                    <i className="bi bi-shop ms-5"></i> Jus Mamah
                                </h2>
                                <h1 className="fw-bold margin-style-sub">
                                    Kelezatan Buah Segar dalam Setiap Tegukan Jus Mamah
                                </h1>
                            </div>
                            <div className="col-6">
                                <img className="people-size" src={people} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img className="juice-image" src={juice} alt="" />
                        </div>
                        <div className="col-8 color-text-2">
                            <h1 className="fw-bold">Jus Mamah</h1>
                            <p>
                                Jus Mamah adalah minuman segar yang sangat lezat, 
                                terbuat dari bahan-bahan segar dan alami dengan rasa yang menyegarkan. 
                                Kombinasi buah-buahan pilihan yang diperas langsung memberikan sensasi kelezatan yang tak tertandingi, 
                                menjadikannya pilihan sempurna untuk menikmati sepanjang hari.
                            </p>
                            <p>
                                Jus Mamah memiliki rasa unik dengan perpaduan buah-buahan segar dan resep rahasia keluarga yang memberikan cita rasa istimewa.
                                Keaslian rasa buah-buahannya tetap terjaga, 
                                memberikan pengalaman minum yang menyenangkan dengan kesegaran yang melekat dalam setiap tegukan.
                            </p>
                            <p>
                                Jus Mamah adalah pilihan sempurna untuk mengatasi dahaga dan menambah energi sepanjang hari.
                                Kaya nutrisi dan antioksidan alami, jus ini tidak hanya enak, tetapi juga baik untuk kesehatan.
                                Dengan meminum Jus Mamah, Anda akan merasakan manfaat sehat yang langsung dirasakan. 
                                Nikmati sensasi menyegarkan dan kelezatan Jus Mamah, dan rasakan perubahan positif dalam hidup Anda.  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="bgJus" src={bgJus} alt="" />
            <div className="container-fluid mb-5">
                <div className="container">
                    <div className="contact">
                        <h1 className="text-center py-5 color-text-2 fw-bold">Contact</h1>
                        <div className="row">
                            <div className="col-6">
                                <div class="mb-3">
                                    <input type="email" class="form-control border border-warning-subtle" id="exampleFormControlInput1" placeholder="Name" />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control border border-warning-subtle" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control border border-warning-subtle" id="exampleFormControlInput1" placeholder="Website Url" />
                                </div>
                                <div class="mb-3">
                                    <textarea class="form-control border border-warning-subtle" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card border border-warning-subtle color-bg color-text">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <div>
                                                    <h1>
                                                        <i class="bi bi-linkedin"></i>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <h1>
                                                        <i class="bi bi-instagram"></i>
                                                    </h1>
                                                </div>
                                                <div>
                                                    <h1>
                                                        <i class="bi bi-twitter"></i>
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div>
                                                    <h4>
                                                        Jus Mamah
                                                    </h4>
                                                </div>
                                                <div>
                                                    <h4>
                                                        +6285882046322 
                                                        <br/>
                                                        fajarph.dev@gmail.com
                                                    </h4>
                                                </div>
                                                <div>
                                                    <h4>
                                                        Bogor, cilebut
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer">
                <div className="container">
                    <div className="py-5 d-flex justify-content-between" >
                        <p className="text-secondary-emphasis">
                            @Copyright by Jus Mamah.
                        </p>
                        <p className="color-text">
                            Home | About | Contact 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home