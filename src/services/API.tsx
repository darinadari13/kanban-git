import { Octokit } from "octokit";
import { useEffect, useState } from 'react';

const PERSONAL_TOKEN = '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';
// const repoUrl = 'https://github.com/facebook/react';


export const RepoIssues = ({ repoUrl }: {repoUrl: string}) => {

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const octokit = new Octokit({ 
      auth: PERSONAL_TOKEN,
    });

  const fetchIssues = async () => {
      try {
        const [owner, repo] = repoUrl.replace('https://github.com/', '').split('/');

        const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
          owner,
          repo,
        });        
        if (response.status === 200) {
          console.log(response);
          setIssues(response.data);
        } else {
          console.error('Failed to fetch issues:', response.statusText);
        }
      } catch (error) {
          console.error('Failed to fetch issues:', error);
      }
    }
    fetchIssues();
  },[repoUrl])
}





