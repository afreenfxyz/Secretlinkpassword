const e={COMMON:{broadcast:"",description:"Ne stockez aucune information confidentielle dans vos emails ou fils de discussion. Partagez un lien secret, disponible qu'une seule fois.",keywords:"secret, générateur de mot de passe, usage unique",button_create_secret:"Créer un lien secret",button_generate_secret:"Ou générer un mot de passe aléatoire",secret_privacy_options:"Paramètres de confidentialité",secret_passphrase:"Mot de passe",secret_passphrase_hint:"Un mot ou une phrase qui est difficile à deviner",secret_recipient_address:"Adresse du destinataire",secret_placeholder:"Collez votre contenu secret",header_create_account:"Créer un compte",header_about:"A propos",header_sign_in:"Se connecter",header_dashboard:"Compte",header_logout:"Déconnexion",secret:"Secret",received:"Reçu",burned:"Supprimé",expires_in:"Expire dans",burn_this_secret:"Supprimer ce secret",burn_this_secret_hint:"Supprimer ce secret le fera disparaître avant qu'il soit lu (cliquez pour confirmer)",burn_this_secret_confirm_hint:"La suppression du secret est définitive et ne peut pas être annulée",msg_check_email:"Vérifiez votre courriel",click_to_continue:"Cliquez pour continuer →",click_to_verify:"Continuez pour vérifier votre compte:",error_secret:"Il n'y a rien à partager",error_passphrase:"Confirmer ce mot de passe",enter_passphrase_here:"Saisissez le mot de passe ici",view_secret:"Consulter le secret",careful_only_see_once:"attention : ne sera affiché qu'une seule fois",warning:"Attention",oops:"Oups !",error:"Bug ",secret_was_truncated:"Le message a été tronqué parce qu’il était trop grand",signup_for_more:"Créer un compte pour en savoir plus",login_to_your_account:"Se connecter à votre compte",sent_to:"Envoyé à",field_email:"Courriel",field_password:"Mot de passe",field_password2:"Confirmer le mot de passe",button_create_account:"Créer un compte",share_a_secret:"Partager un secret",title_home:"Accueil",title_recent_secrets:"Secrets récents",word_none:"Aucun",word_burned:"supprimé",word_received:"reçu",word_confirm:"Confirmer",word_cancel:"Annuler",feedback_text:"Une question ou un commentaire ?",button_send_feedback:"Envoyer une réaction",verification_sent_to:"Une vérification a été envoyée à -"},homepage:{tagline1:"Collez votre mot de passe, message secret ou lien privé ci-dessous",tagline2:"Ne stockez aucune information confidentielle dans vos emails ou fils de discussion.",secret_hint:"* Un lien secret ne fonctionne qu'une fois puis disparaît à jamais. *",secret_form_more_text1:"Créez un",secret_form_more_text2:"compte gratuit",secret_form_more_text3:"pour utiliser des mots de passe à sécurité accrue et acccéder à des options supplémentaires de confidentialité. Nous vous enverrons même le lien par email si vous le soouhaitez.",cta_title:"Utilisez un domaine personnalisé",cta_subtitle:"Valorisez votre marque et partagez en toute confiance ",cta_feature1:"Votre propre domaine personnalisé",cta_feature2:"Partage illimité de secrets",cta_feature3:"Contrôles de confidentialité avancés",explore_premium_plans:"Découvrir les forfaits Premium",need_free_account:"Vous débutez ?",sign_up_free:"Créer un compte gratuit"},private:{pretext:"Partager ce lien :",requires_passphrase:"Demande un mot de de passe.",this_msg_is_encrypted:"Ce message est chiffré avec votre mot de passe.",only_see_once:"ne sera lisible qu'une seule fois."},shared:{requires_passphrase:"Lire ce message exige un mot de passe :",viewed_own_secret:"Vous avez vu votre propre secret. Il n'est plus disponible pour quelqu'un d'autre.",you_created_this_secret:"Vous avez créé ce secret. Si vous le voyez, le destinateur ne pourra plus le voir.",your_secret_message:"Votre message secret :",this_message_for_you:"Ce message est pour vous :",reply_with_secret:"Répondre avec un autre secret"},dashboard:{title_received:"Délivré",title_not_received:"Non délivré",title_no_recent_secrets:"Pas de secrets récents"},login:{need_an_account:"Besoin d'un compte ?",forgot_your_password:"Mot de passe oublié ?",button_sign_in:"Se connecter",enter_your_credentials:"Saisissez vos identifiants"},incoming:{tagline1:"Collez un mot de passe, message secret ou lien privé ci-dessous",tagline2:"Ne stockez aucune information confidentielle dans vos emails ou fils de discussion.",secret_hint:"* Un lien secret ne fonctionne qu'une fois puis disparaît à jamais.",incoming_button_create:"Envoyer au support",incoming_secret_options:"Informations pour le support",incoming_secret_placeholder:"Entrez les informations dont nous aurions besoin pour le support (par exemple, mot de passe du système)",incoming_ticket_number:"Entrez le numéro de ticket",incoming_ticket_number_hint:"Vous pouvez le trouver dans votre courriel (par exemple, 123456)",incoming_recipient_address:"Destinataire du support",incoming_success_message:" Votre email a été envoyé"}},s={incomingsupport:{subject:"[Ticket: %s]",body1:"Quelqu'un vous a envoyé les informations suivantes"},secretlink:{subject:"%s vous a envoyé un secret",body1:"Un secret vous a été envoyé par",body_tagline:"Si vous ne connaissez pas l'expéditeur ou croyez qu'il s'agit de spam, merci de nous contacter en fournissant les détails à : "},welcome:{subject:"Vérifiez votre compte sur OnetimeSecret.com",body1:"Bienvenue sur OnetimeSecret.com. On a un secret pour vous !",please_verify:"Vérifier votre compte, s'il vous plaît:",postscript1:"Ce email a été envoyé à",postscript2:"Si vous n’avez pas créé ce compte, supprimez ce message et nous ne vous contacterons plus."}},r={web:e,email:s};export{r as default,s as email,e as web};
