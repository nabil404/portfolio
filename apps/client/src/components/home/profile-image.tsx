import Image from 'next/image'

export const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="md:w-80 md:h-80 w-64 h-64 rounded-full bg-gradient-to-br from-accent via-secondary to-purple-500 p-2 floating glow-effect ml-auto">
        <Image
          height={500}
          width={500}
          className="w-full h-full rounded-full object-cover"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d2ad5ac0bd-ac5928c6970a374eb1d0.png"
          alt="professional software engineer portrait, confident smile, modern tech background"
        />
      </div>
    </div>
  )
}
