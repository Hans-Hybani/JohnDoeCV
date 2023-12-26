import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample() {
  return (
    <div>
      HTLM5 90%
      <ProgressBar variant="danger" now={90} />
      CSS3 80%
      <ProgressBar variant="info" now={80} />
      JAVASCRIPT 70%
      <ProgressBar variant="warning" now={70} />
      PHP 60%
      <ProgressBar variant="success" now={60} />
      REACT 50%
      <ProgressBar variant="html" now={50} />
    </div>
  );
}

export default ContextualExample;