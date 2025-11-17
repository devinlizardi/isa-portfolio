import cs from "./ParaMiAbuela.module.scss";

export const ParaMiAbuela = () => {
  return (
    <section className={cs.abuela}>
      <ul>
        <li>To freeze time,</li>
        <li>to diminish distance,</li>
        <li>and to document closeness forever,</li>
      </ul>
      <p>
        <span className={cs.indent} />
        my grandma and I would kiss pieces of paper. The lipstick on our lips
        would leave the kiss imprinted. She would fold and pack my kiss into her
        bag and bring it with her to Lima. I would keep her kiss next to my bed.
      </p>
      <ul>
        <li>These kisses</li>
        <li>were little reminders of love we could hold onto.</li>
      </ul>
      <p>
        <span className={cs.indent} />
        She and I would also play a game we called señora vecina. In a park by
        my house in Boston, we’d each designate a place we called home and visit
        one another, bringing each other ‘neighborly gifts.’ We’d sit together,
        talking, eating oreos. But we never imagined homes together, we were
        always “neighbors.” It was always either her house, or mine.
      </p>
    </section>
  );
};
