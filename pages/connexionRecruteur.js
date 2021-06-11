import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';



export default function Connect() {
   
    return (
        
        <div className="SignDiv">
            <Head>
                <title>Connection Recruteur a-recruit</title>
            </Head>

            <main>
                <div className="row blocCcompte">
                    <h2 className="center">Espace consultant</h2>
                    <div className="col-6 bloc mt-5 mb-3">
                        <h3 className="center">Connexion</h3>
                        <form method="POST" className="signInBlock">
                            <div className="mb-3">
                                <label for="email" className="form-label">e-mail</label>
                                <input type="email" className="form-control inputs" name="email" placeholder="e-mail"></input>
                                <div className="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="col-form-label">Mot de passe</label>
                                <div class="col">
                                    <input type="password" name="password" class="form-control" placeholder="Mot de passe"></input>
                                </div>
                            </div>
                            <div className="center">
                                <button type="submit" className="btn btn-primary mt-4 mb-4">Connexion</button>
                            </div>
                        </form>
                    </div>
                    <Link href="/inscriptionRecruteur"><a className="center">Pas encore inscrit ? Inscription</a></Link>
                </div>
            </main>
        </div>
    );
}