import Upload from './components/Upload'

export default function Page() {
  return (
    <main className="min-h-screen min-w-screen grid place-content-center text-center">
      <Upload />
      <footer className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">
        <small>created by <a className="text-[#09f]" href="https://github.com/tomas-oa">tomas-oa</a> - devChallenges.io</small>
        <br />
        <small> <span>&copy;</span> Copyright 2023 Jipi Corp S.A. </small>
      </footer>
    </main>
  )
}
