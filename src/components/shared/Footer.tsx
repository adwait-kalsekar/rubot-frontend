import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function Footer() {
  return (
    <footer style={{ color: 'rgb(156 163 175)' }} className="p-4 text-center">
      © {new Date().getFullYear()} Developed By{' '}
      <a
        style={{ color: 'white' }}
        href="https://adwait-kalsekar-portfolio.vercel.app/"
        target="_new"
      >
        Adwait Kalsekar <OpenInBrowserIcon style={{ fontSize: 'medium' }} />
      </a>
    </footer>
  );
}
