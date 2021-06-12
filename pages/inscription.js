import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';



export default function SignIn() {
    
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return (
        <div className="SignDiv">
            <Head>
                <title>Inscription a-recruit</title>
            </Head>

            <main>
                <div className="row blocCcompte">
                    <h2 className="center">Espace candidat</h2>
                    <div className="col col-sm-8 col-md-8  col-lg-8 col-xl-6 bloc mt-5 mb-3">
                        <h3 className="center">Créer votre compte</h3>
                        <form method="POST" className="signInBlock">
                            <div className="row">
                            <div className="mb-3 col">
                                <label for="LastName" className="form-label">Nom</label>
                                <input type="text" className="form-control inputs" name="nom" placeholder="Nom"></input>
                                <div className="form-text"></div>
                            </div>
                            <div className="mb-3 col">
                                <label for="FirstName" className="form-label">Prénom</label>
                                <input type="text" className="form-control inputs" name="nom" placeholder="Prénom"></input>
                                <div className="form-text"></div>
                            </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label for="email" className="form-label">e-mail</label>
                                    <input type="email" className="form-control inputs" name="email" placeholder="e-mail"></input>
                                    <div className="form-text"></div>
                                </div>
                                <div className="mb-3 col">
                                    <label for="Phone" className="form-label">Téléphone</label>
                                    <input type="phone" className="form-control inputs" name="phone" placeholder="Téléphone"></input>
                                    <div className="form-text"></div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="birthDay" className="form-label">Date de Naissance</label>
                                    <select class="custom-select col m-2" id="Day">
                                        {(() => {
                                            let days = [];
                                            for (let i=1; i<32; i++){
                                                days.push(<option key={[i]}>{i}</option>)
                                            }
                                            return days
                                        })()}
                                    </select> 
                                    <select class="custom-select col m-2" id="Month">
                                        {months.map(month => (
                                            <option>{month}</option>
                                        ))}
                                    </select>
                                    <select class="custom-select col m-2" id="Year">
                                        {(() => {
                                            let years = [];
                                            for (let i=2021; i>1899; i--){
                                                years.push(<option key={[i]}>{i}</option>)
                                            }
                                            return years
                                        })()}
                                    </select>
                            </div>
                            <div className="row">
                            <div class="col mb-3">
                                <label for="password" class="col-form-label">Mot de passe</label>
                                <div class="col">
                                    <input type="password" name="password" class="form-control" placeholder="Mot de passe"></input>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <label for="passwordConfirm" class="col-form-label">Confirmation</label>
                                <div class="col">
                                    <input type="password" name="passwordConfirm" class="form-control" placeholder="Confirmez mot de passe"></input>
                                </div>
                            </div>
                            </div>
                            <div className="file">
                                <label for="CV"class="col-form-label">Insérer votre CV</label> 
                                <input clzssName="file" type="file"></input>
                            </div>
                            <div className="center">
                                <button  type="submit" className="btn btn-primary mt-4 mb-4">Inscription</button>
                            </div>
                        </form>
                    </div>
                    <Link href="/connexion"><a className="center">Déjà inscrit ? connectez-vous</a></Link>
                </div>
            </main>
        </div>
    );
}

// years > 2003 ? years.push(<div className="form-text error">Vous devez êtrer majeur pour vous inscrire</div>) : '';