class Solution {
    public boolean validateBinaryTreeNodes(int n, int[] leftChild, int[] rightChild) {
        int visited[]=new int[n];
        int visitedby[]=new int[n];
        Queue<Integer> que=new LinkedList<>();
        int count=0;
       for(int i=0;i<n;i++)
          { if(visited[i]==0 )
        {que.add(i);count++;visitedby[i]=-1;}
        while(que.size()!=0)
        {
            int ele=que.remove();
            if(visited[ele]==1)return false;
            visited[ele]=1;
            if(leftChild[ele]!=-1 ){
                
                if(visited[leftChild[ele]]==1)
                {
                    if(visitedby[leftChild[ele]]==-1)
                    {
                        //do nothing
                         int root=ele;
                    while(visitedby[root]!=-1)
                    {
                       root=visitedby[root];
                    }
                    if(root==leftChild[ele])return false;
                        
                        visitedby[leftChild[ele]]=ele;
                        count--;
                    }
                    else{
                        return false;
                    }
                }else
                {   visitedby[leftChild[ele]]=ele;
                    que.add(leftChild[ele]);
                }
                    
            
           }
           if(rightChild[ele]!=-1 ){
                
            if(visited[rightChild[ele]]==1)
            {
                if(visitedby[rightChild[ele]]==-1)
                {
                    //do nothing
                    
                    int root=ele;
                    while(visitedby[root]!=-1)
                    {
                       root=visitedby[root];
                    }
                    if(root==rightChild[ele])return false;
                    
                    visitedby[rightChild[ele]]=ele;
                    count--;
                }
                else{
                    return false;
                }
            }else
            {   visitedby[rightChild[ele]]=ele;
                que.add(rightChild[ele]);
            }
                
        
         }


    }}
        System.out.println(count);
        if(count>1)return false;
        return true;
    
}
}