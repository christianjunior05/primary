export default function CVG() {
  return (
    <div className="w-full">
      <main className="w-full px-4 py-10 text-slate-900 space-y-12 leading-relaxed">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-blue">
          Mentions légales
        </h1>

        {/* Éditeur */}
        <section aria-labelledby="editeur" className="space-y-3">
          <h2 id="editeur" className="mb-4 text-xl font-semibold text-blue">
            Éditeur du site
          </h2>
          <p className="font-semibold">MON COACH ORIENTATION</p>
          <p>SAS au capital de 10&nbsp;000,00&nbsp;€</p>
          <address className="not-italic">
            Siège social&nbsp;: 15 Avenue Emile Baudot, 91300 Massy
          </address>
          <p>RCS Evry&nbsp;: 980&nbsp;659&nbsp;262</p>
        </section>

        {/* Hébergement */}
        <section aria-labelledby="hebergeur" className="space-y-3">
          <h2 id="hebergeur" className="mb-4 text-xl font-semibold text-blue">
            Hébergement
          </h2>
          <a
            href="https://www.gandi.net/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sky-700 underline decoration-sky-300 hover:decoration-sky-700"
          >
            https://www.gandi.net/fr
          </a>
        </section>

        {/* Directeur de publication */}
        <section aria-labelledby="publication" className="space-y-3">
          <h2 id="publication" className="mb-4 text-xl font-semibold text-blue">
            Directeur de publication
          </h2>
          <p>Sonia Tarrada</p>
        </section>

        {/* Crédits */}
        <section aria-labelledby="credits" className="space-y-3">
          <h2 id="credits" className="mb-4 text-xl font-semibold text-blue">
            Crédits
          </h2>
          <p>
            Les illustrations utilisées sont issues du site{" "}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline decoration-sky-300 hover:decoration-sky-700"
            >
              https://unsplash.com/
            </a>
            .
          </p>
        </section>

        {/* Droits d'auteur */}
        <section aria-labelledby="droits" className="space-y-3">
          <h2 id="droits" className="mb-4 text-xl font-semibold text-blue">
            Droits d&apos;auteurs / copyright
          </h2>
          <p className="text-slate-700">
            L’ensemble de ce site relève de la législation française et internationale sur le droit
            d’auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés,
            y compris pour les documents téléchargeables, les textes, les représentations
            iconographiques et photographiques. La reproduction de tout ou partie de ce site sur un
            support électronique quel qu’il soit est formellement interdite sauf autorisation expresse
            du directeur de la publication. Les marques citées sur ce site sont déposées par les
            sociétés qui en sont propriétaires.
          </p>
        </section>

        {/* Données perso */}
        <section aria-labelledby="donnees-personnelles" className="space-y-3">
          <h2 id="donnees-personnelles" className="mb-4 text-xl font-semibold text-blue">
            Données personnelles
          </h2>
          <p className="text-slate-700">
            PROMETHEOR s’engagent à ce que la collecte et le traitement de vos données effectuées à
            partir de ce site soient conformes au RGPD et à la loi Informatique et Libertés.
          </p>
        </section>

        {/* Politique de confidentialité */}
        <section aria-labelledby="confidentialite" className="space-y-3">
          <h2 id="confidentialite" className="mb-4 text-xl font-semibold text-blue">
            Politique de confidentialité
          </h2>
          <p>-</p>

          <div className="prose prose-slate max-w-none">
            <p>
              Les utilisateurs de la Plateforme (le ou les «&nbsp;Utilisateur(s)&nbsp;») ont la
              possibilité d’accéder à différents services parmi lesquels la mise en relation avec des
              professionnels dans le domaine du conseil en orientation scolaire permettant de mettre en
              place des parcours d’orientations scolaires sur mesure et des accompagnements personnalisés
              (le ou les «&nbsp;Service(s)&nbsp;»).
            </p>
            <p>
              Devenir un Utilisateur de la Plateforme implique une collecte d’informations. Dans ce
              contexte, la protection de vos données constitue une priorité absolue pour la Société. Ainsi,
              afin de préserver votre confiance, la Société a adopté cette présente Politique de
              Confidentialité.
            </p>
            <p>
              Dans le cadre de l’application du Règlement (UE) 2016/679 et de la loi Informatique et
              Libertés du 6 janvier 1978 modifiée, cette politique a pour but de vous informer sur la
              manière dont vos données à caractère personnel peuvent être traitées lorsque vous, Utilisateur,
              visitez le site Internet de la Société.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-blue">
              1. Une donnée à caractère personnel, c’est quoi&nbsp;?
            </h3>
            <p>
              Toute information se rapportant à une personne physique identifiée ou identifiable (ex. nom,
              adresse postale/électronique, téléphone).
            </p>

            <h3 className="mt-8 text-lg font-semibold text-blue">
              2. Qui est le responsable du traitement&nbsp;?
            </h3>
            <p>
              Lorsque vous visitez le site Internet de PROMETHEOR, vos données sont traitées par la Société
              (détermine finalités et moyens).
            </p>

            <h3 className="mt-8 text-lg font-semibold text-blue">
              3. Quand vos données sont-elles traitées&nbsp;?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Navigation sur le site PROMETHEOR</li>
              <li>Demandes d’informations, brochures, documentation</li>
              <li>Demande de contact</li>
              <li>Prise de rendez-vous avec un conseiller</li>
              <li>Achat d’une prestation d’orientation</li>
              <li>Création d’un compte (accès documents/échanges, compte-rendus des séances)</li>
            </ul>
            <p>Un minimum d’informations (nom, prénom, e-mail) est requis pour créer un compte.</p>

            <h3 className="mt-8 text-lg font-semibold text-blue">
              4. Pourquoi vos données sont-elles traitées&nbsp;?
            </h3>
            <p>Uniquement pour les finalités décrites ici ou précisées au moment de la collecte.</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Répondre à vos demandes d’information et de documentation</li>
              <li>Mise en relation avec un conseiller d’orientation scolaire</li>
              <li>Gestion des commandes et du paiement</li>
              <li>Gestion de la relation commerciale</li>
              <li>Études/analyses (consommation, satisfaction, tendances)</li>
              <li>Exploitation et gestion du site web</li>
            </ul>
            <p>Cookies&nbsp;:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Mesure d’audience (sur consentement, révocable)</li>
              <li>Partage sur les réseaux sociaux (sur consentement, révocable)</li>
              <li>Personnalisation des contenus et communications</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-blue">5. Base juridique</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Consentement exprès préalable</li>
              <li>Exécution d’un service/contrat ou mesure précontractuelle</li>
              <li>Obligation légale ou protection des intérêts vitaux/légitimes</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-blue">6. Destinataires</h3>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>PROMETHEOR</li>
              <li>Conseillers d’orientation scolaire</li>
              <li>Autorités/tiers en cas d’obligation légale</li>
              <li>Partenaires de paiement</li>
              <li>Prestataires techniques habilités (ex. routage)</li>
            </ul>

            <h3 className="mt-8 text-lg font-semibold text-blue">7. Durées de conservation</h3>
            <p>
              Données conservées le temps nécessaire aux finalités. Compte membre inactif&nbsp;3 ans =&gt;
              suppression. Demandes de documentation&nbsp;: 3 ans après la dernière demande. Cookies&nbsp;:
              max 13 mois. Certaines données peuvent être conservées plus longtemps pour obligations
              légales/fiscales/comptables.
            </p>
            <p>
              Droits RGPD&nbsp;: accès, rectification, effacement, opposition, limitation, retrait du
              consentement, directives post-mortem.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Email&nbsp;: <a href="mailto:contact@prometheor.frou">contact@prometheor.frou</a>
              </li>
              <li>Courrier&nbsp;: PROMETHEOR — 15 rue Emile Baudot, 91300 MASSY</li>
            </ul>
            <p>Délai de réponse&nbsp;: 1 mois. Réclamation possible auprès de la CNIL.</p>

            <h3 className="mt-8 text-lg font-semibold text-blue">8. Cookies utilisés</h3>
            <p>Lors de votre navigation, des cookies peuvent être déposés.</p>
          </div>

          {/* Tableau cookies */}
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50">
                <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:font-semibold [&>th]:text-slate-700">
                  <th>Nom du cookie</th>
                  <th>Finalité du cookie</th>
                  <th>Durée de conservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  {
                    nom: "Google analytics",
                    finalite:
                      "Mesure d’audience (visites, pages vues, activité, fréquence de retour)",
                    duree: "12 mois",
                  },
                  {
                    nom: "Facebook pixel",
                    finalite: "Partage de contenus sur les réseaux sociaux",
                    duree: "12 mois",
                  },
                  {
                    nom: "Sirdata",
                    finalite: "Partage de contenus sur les réseaux sociaux",
                    duree: "12 mois",
                  },
                  { nom: "Hubspot", finalite: "Chatbox", duree: "12 mois" },
                  {
                    nom: "Calendly",
                    finalite: "Prise de rendez-vous avec les conseiller",
                    duree: "12 mois",
                  },
                ].map((row) => (
                  <tr key={row.nom} className="[&>td]:px-4 [&>td]:py-3">
                    <td className="whitespace-nowrap">{row.nom}</td>
                    <td className="max-w-xl">{row.finalite}</td>
                    <td className="whitespace-nowrap">{row.duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-slate-700">
            Vous pouvez désactiver les cookies dans votre navigateur. Certaines
            fonctionnalités pourraient ne plus fonctionner.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-blue">9. Sécurité des données</h3>
          <p className="text-slate-700">
            L’accès à votre compte est protégé par mot de passe (à garder confidentiel).
            En cas d’usage non autorisé ou d’atteinte à la sécurité, prévenez la Société.
            Des mesures techniques et organisationnelles raisonnables protègent vos
            informations (perte, usage abusif, accès/divulgation non autorisés,
            altération, destruction).
          </p>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact" className="space-y-3">
          <h2 id="contact" className="mb-4 text-xl font-semibold text-blue">
            Contact
          </h2>
          <p>Pour toute question, observation, suggestion ou réclamation&nbsp;:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              Email&nbsp;:{" "}
              <a
                href="mailto:PROMETHEOR-contact@prometheor.frou"
                className="text-sky-700 underline decoration-sky-300 hover:decoration-sky-700"
              >
                PROMETHEOR-contact@prometheor.frou
              </a>
            </li>
            <li>Courrier&nbsp;: PROMETHEOR — 15 rue Emile Baudot, 91300 Massy</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
