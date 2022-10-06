import { SecondaryButton, PrimaryButton } from 'components/buttons'

const HeaderHero = () => {
  return (
    <section className="hero header-hero">
      <h2>Let's share your gift lists!</h2>
      <p>
        Answer some questions and create your gift list. The rest is easy, share
        it!
      </p>
      <PrimaryButton label="Choose your gifts" onClick={() => alert(11)} />
    </section>
  )
}

const ActionHero = () => {
  return (
    <section className="hero action-hero">
      <span>Good way to find a gift!</span>
      <SecondaryButton
        label="Start to select your gifts!"
        onClick={() => alert(11)}
      />
    </section>
  )
}

const AboutHero = () => {
  return (
    <section className="hero about-hero">
      <div className="container">
        We are here to solve the problems experienced in
        <strong> choosing a gift</strong>. Invite the friend you want to gift
        here and choose the gift list. Surprise the friend and send the gift!
      </div>
    </section>
  )
}

export { HeaderHero, ActionHero, AboutHero }