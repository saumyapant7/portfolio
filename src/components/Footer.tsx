import { profile } from "@/data/profile";

/* Ft6 · Letter close. */
export function Footer() {
  return (
    <footer className="shell foot-letter">
      <hr className="seam" />
      <p className="foot-letter__close">
        Yours, from {profile.location.split(",")[0]},
        <br />
        <span className="foot-letter__sign">Saumya. {new Date().getFullYear()}.</span>
      </p>
      <p className="foot-letter__ps">
        P.S. Letters back are welcome at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        Elsewhere:{" "}
        <a href={profile.links.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
        ,{" "}
        <a href={profile.links.youtube} target="_blank" rel="noopener">
          YouTube
        </a>
        ,{" "}
        <a href={profile.links.instagram} target="_blank" rel="noopener">
          Instagram
        </a>
        ,{" "}
        <a href={profile.links.github} target="_blank" rel="noopener">
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
