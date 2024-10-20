import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:3005";

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, major: major, email: email, password: password, confPass: confPass })
    });

    if (password != confPass) {
      setErrorMessage("passwords do not match");
    }
    else {
      const data = await response.json();
      if (data.created) {
        navigate("/");
      }
      else if (data.errorMessage != ""){
        setErrorMessage(data.errorMessage);
      }
    }
  };

  return (
    <div className='wrapper'>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder='Major'
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Confirm Password'
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Register</button>

        <div className="Login-link">
          <p>Already have an account? <Link to="/">Login Here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

const majors = ['Accounting',
  'Actuarial Science',
  'African and African Diaspora Studies',
  'American Sign Language/English Interpreting',
  'Animation',
  'Anthropology',
  'Applied Computing',
  'Applied Mathematics & Computer Science',
  'Architectural Studies',
  'Architecture',
  'Art',
  'Art Education',
  'Art History',
  'Atmospheric Sciences',
  'Biochemistry',
  'Biological Sciences',
  'Biomedical Engineering',
  'Biomedical Sciences',
  'Chemistry',
  'Civil Engineering',
  'Classics',
  'Committee Interdisciplinary Major',
  'Communication',
  'Communication Sciences & Disorders',
  'Community Engagement & Education',
  'Computer Engineering',
  'Computer Science',
  'Computer Science (Bachelor of Arts)',
  'Conservation & Environmental Science',
  'Criminal Justice and Criminology',
  'Dance',
  'Data Analytics',
  'Data Science',
  'Design & Visual Communication',
  'Digital Arts and Culture',
  'Economics',
  'Education',
  'Electrical Engineering',
  'English',
  'Environmental Engineering',
  'Exceptional Education',
  'Film',
  'Film Studies',
  'Finance',
  'French',
  'Freshwater Sciences',
  'General Business',
  'Geography',
  'Geosciences',
  'German',
  'Global Health',
  'Global Studies',
  'Health Care Administration',
  'History',
  'Human Resources Management',
  'Industrial Engineering',
  'Information Science & Technology',
  'Information Technology Management',
  'International Studies',
  'Italian',
  'Jewish Studies',
  'Journalism, Advertising, & Media Studies',
  'Kinesiology',
  'Latin American, Caribbean, & US Latinx Studies',
  'Linguistics',
  'Marketing',
  'Materials Engineering',
  'Mathematics',
  'Mechanical Engineering',
  'Microbiology',
  'Music',
  'Music Composition & Technology',
  'Music Education',
  'Music History & Literature',
  'Neuroscience',
  'Nursing',
  'Nutritional Sciences',
  'Occupational Science & Technology',
  'Philosophy',
  'Physics',
  'Political Science',
  'Psychology',
  'Public Health',
  'Religious Studies',
  'Russian',
  'Social Work',
  'Sociology',
  'Spanish',
  'Studio Art',
  'Supply Chain & Operations Management',
  'Theatre Education',
  'Theatre Performance',
  'Theatre Practices',
  'Theatre Production',
  'Urban Studies',
  "Women's and Gender Studies"]