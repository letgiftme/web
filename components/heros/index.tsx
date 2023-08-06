import { SecondaryButton, PrimaryButton } from 'components/buttons'
import { useRouter } from 'next/router'

const HeaderHero = () => {
  const router = useRouter()

  return (
    <section className="hero header-hero">
      <h2>Let's share your gift lists!</h2>
      <p>
        Answer some questions and create your gift list. The rest is easy, share
        it!
      </p>
      <PrimaryButton
        label="Choose your gifts"
        onClick={() => router.push('/questions/' + 1)}
      />
    </section>
  )
}

const ActionHero = () => {
  const router = useRouter()

  return (
    <section className="hero action-hero">
      <span>Good way to find a gift!</span>
      <SecondaryButton
        label="Start to select your gifts!"
        onClick={() => router.push('/questions/' + 1)}
      />
    </section>
  )
}

const AboutHero = () => {
  return (
    <section id="about" className="hero about-hero">
      <div className="container">
        We are here to solve the problems experienced in
        <strong> choosing a gift</strong>. Invite the friend you want to gift
        here and choose the gift list. Surprise the friend and send the gift!
      </div>
    </section>
  )
}

export { HeaderHero, ActionHero, AboutHero }
